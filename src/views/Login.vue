<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-5 is-offset-4">
          <div class="box">
            <h1>Ventanilla Digital</h1>
            <figure class="avatar">
              <router-link
                class="notification"
                tag="img"
                src="https://www.itmerida.mx/imagenes/tec.png"
                width="125px"
                alt="Logo"
                to="/home"
              >
              </router-link>
            </figure>
            <form>
              <b-field>
                <b-input
                  placeholder="Matricula"
                  type="text"
                  icon="account"
                  required
                  v-model="user.enrollment"
                >
                </b-input>
              </b-field>

              <b-field>
                <b-input
                  required
                  type="password"
                  placeholder="Contraseña"
                  password-reveal
                  icon="lock"
                  v-model="user.password"
                  @keyup.enter="submit"
                >
                </b-input>
              </b-field>

              <div class="field">
                <label class="checkbox">
                  <input type="checkbox" />
                  Recuérdame
                </label>
              </div>
              <button
                class="button is-block is-info is-large is-fullwidth"
                :class="{ 'is-loading': isLoading }"
                @click.prevent="submit"
              >
                Iniciar sesión
                <i class="fa fa-sign-in" aria-hidden="true"></i>
              </button>
            </form>
          </div>
          <p class="has-text-black">
            ¿No tienes una cuenta?&nbsp;·&nbsp;
            <router-link tag="a" to="/register">Regístrate</router-link>
            <!-- <br />¿Olvidaste tu contraseña? &nbsp;·&nbsp;
            <a href="../">Recuperar contraseña</a> -->
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import redirect from '../mixins/redirect'
export default {
  mixins: [redirect],
  data () {
    return {
      user: {
        enrollment: '',
        password: ''
      },
      message: '',
      isLoading: false
    }
  },
  methods: {
    alertCustomError (error) {
      this.$buefy.snackbar.open({
        duration: 5000,
        message: error,
        type: 'is-danger',
        position: 'is-bottom-left',
        actionText: 'OK',
        queue: false
      })
    },
    async submit () {
      this.isLoading = true
      try {
        await this.$store.dispatch('login', this.user)
        this.$router.push({
          path: this.redirect || '/',
          query: this.otherQuery
        })
      } catch (error) {
        if (error.detail) {
          this.alertCustomError(error.detail)
        }
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style scoped>
html,
body {
  font-family: 'Questrial', sans-serif;
  font-size: 14px;
  font-weight: 300;
}
.hero.is-success {
  background: rgb(247, 247, 247);
}
.hero .nav,
.hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.box {
  margin-top: 1rem;
  background: white;
  border-radius: 10px;
}
.avatar {
  margin-top: 20px;
  padding-bottom: 20px;
}
.avatar img {
  padding: 0px;
  background: white;
}
input {
  font-weight: 300;
}
p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 1rem;
}

.login-hr {
  border-bottom: 1px solid rgb(7, 7, 7);
}

.has-text-black {
  color: black;
}

.field {
  padding-bottom: 10px;
}

.fa {
  margin-left: 5px;
}

.button {
  background: #800000;
}

.button:hover {
  background: #d9ad26;
  color: black;
  transition: 0.6s;
}

.box h1 {
  font-size: 40px;
  font-weight: 800;
  letter-spacing: -2px;
}

.notification:hover {
  cursor: pointer;
  transition: 0.5s;
  transform: scale(
    1.1
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>
