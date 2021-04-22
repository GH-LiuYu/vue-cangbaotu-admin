<template>
    <div class="content">
        <div class="nav"><span class="el-icon-back" @click="back"></span></div>
        <el-divider></el-divider>
        <div class="list">
            <el-form ref="form" :model="form" label-width="80px" style="background-color: white">
                <el-form-item label="名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="排序">
                    <el-input v-model="form.sort" type="number" min="0"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>
<script>
    import {add} from '@/api/nav/nav';
    export default {
        data() {
            return {
                form: {
                    name: '',
                    sort:'',
                }
            }
        },
        methods: {
            onSubmit() {
                add({form:this.form}).then(response => {
                    this.data  = response.data;
                    console.log(this.data)
                }).catch(error => {
                    console.info(error.message)
                })
            },
            back(){
                this.$router.go(-1);//返回上一层
            },
        }
    }
</script>
<style lang="scss" scoped>
    .content{
        background-color: white;
        border-radius: 12px 12px 0px 0px;
        height: 300px;
    }

    .nav{
        background-color: #50669e;
        border-radius: 12px 12px 0px 0px;
        margin-bottom: 5px;
        span{
            padding:9px;
            cursor:pointer
        }
    }
    .list{
        display: flex;
        justify-content:center;
        align-items: center;

    }
</style>
