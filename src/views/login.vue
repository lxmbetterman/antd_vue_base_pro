<template>
    <div class="login_container">
        <div style="height: 20vh;"></div>
        <Login></Login>
    </div>
</template>

<script>
    import {Form} from 'ant-design-vue'
    import {mapActions} from "vuex"


    const Login = Form.create()({

        methods: {
            ...mapActions([ "Login"]),
            handleSubmit(e) {
                console.log(this,"??")
                e.preventDefault()
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values)
                        /*this.axios({
                            url: '/login/login',
                            method: 'post',
                            data: {}
                        }).then(function (data) {
                            console.log(data, "XXXX")
                        })*/

                        this.Login(values).then(() => {
                            console.log("login Success")
                            this.$router.push({ name: "Dashboard" })
                        }).catch((err) => {
                            console.log("login error")
                        })
                    }
                })
            },
        },

        render() {
            const {getFieldDecorator} = this.form
            return (
                <a-form id='components-form-demo-normal-login' onSubmit={this.handleSubmit} class='login-form'>
                    <a-form-item>
                        {getFieldDecorator('userName', {
                            rules: [{required: true, message: 'Please input your username!'}],
                        })(
                            <a-input prefix={<a-icon type='user' style={{color: 'rgba(0,0,0,.25)'}}/>}
                                     placeholder='Username'/>
                        )}
                    </a-form-item>
                    <a-form-item>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please input your Password!'}],
                        })(
                            <a-input prefix={<a-icon type='lock' style={{color: 'rgba(0,0,0,.25)'}}/>} type='password'
                                     placeholder='Password'/>
                        )}
                    </a-form-item>
                    <a-form-item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <a-checkbox>Remember me</a-checkbox>
                        )}
                        <a class='login-form-forgot' href=''>Forgot password</a>
                        <a-button type='primary' htmlType='submit' class='login-form-button'>
                            Log in
                        </a-button>
                        Or <a href=''>register now!</a>
                    </a-form-item>
                </a-form>
            )
        },
    })
    export default {
        name: "login",
        components: {Login},
        data() {
            return {}
        },
        mounted:function () {

        },
    }
</script>

<style>
    #components-form-demo-normal-login .login-form {
        max-width: 300px;
    }

    #components-form-demo-normal-login .login-form-forgot {
        float: right;
    }

    #components-form-demo-normal-login .login-form-button {
        width: 100%;
    }

    .login_container {
        width: 500px;
        margin: 0 auto;
        background-color: transparent;
    }
</style>
