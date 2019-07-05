<template>

    <v-card :class="addBoardClass" flat>
        <v-layout row wrap>
            <v-flex sm2 xs12>
                <select class="add__type_mod " v-model="type" @change="changedType" ref="selectRef">
                    <option class="text-center" value="inc" selected>+</option>
                    <option value="exp">-</option>
                </select>
            </v-flex>
            <v-flex sm6 xs12>
                <v-text-field :color="color" label="description" prependInnerIcon="message" v-model="description" ref="descriptionRef"></v-text-field>
            </v-flex>
            <v-flex sm2 xs12>
                <v-text-field :color="color" label="value" type="number" prependInnerIcon="edit" v-model="value"></v-text-field>
            </v-flex>
            <v-flex sm2 xs12>
                <v-btn fab depressed flat @click="addItem">
                    <v-icon class = 'add__icon' large :color="color">check_circle_outline</v-icon>                   
                </v-btn>
            </v-flex>
        </v-layout>
    </v-card>

</template>

<script>

    import DataItemsModel from './DataItemsModel'
    import DataItemsService from '../../DataItemsService'

    export default {
    	
        data()
        {
            return {
                type : "",
                description : "",
                value: "",
                color : "teal",
                addBoardClass : "add"
            }
        },      
        methods : 
        {
            async addItem()
            {
                let intVal = parseInt(this.value)
                if (this.description !== "" && !isNaN(intVal) && intVal > 0)
                {
                    let newItem;
                    //create DataItems Model's object
                    newItem              = new DataItemsModel();
                    newItem._type        = this.type;
                    newItem._description = this.description;
                    newItem._value       = intVal;

                    try {
                        //insert an item row into data.json
                        await DataItemsService.insertItem(newItem);
                        //update data of store to update ui
                        this.$store.commit('data',await DataItemsService.getDataItems())
                    } catch(e) {
                        console.log(e);
                    }
                    //clear fiels
                    this.description = '';
                    this.value = '';
                    // add cursor to description input
                    this.$refs.descriptionRef.focus();
                }
            },
            changedType()
            {
                let fields = 
                [
                    this.$refs.selectRef,
                ]
                if (fields[0].value === 'exp') {
                    this.addBoardClass = "red-add"
                    this.color = "red"
                } else {
                    this.addBoardClass = "add"
                    this.color = "teal"
                }
            }
        },
        created()
        {
            document.addEventListener('keypress',event => {
                // check if you press enter
                if (event.keyCode === 13 || event.which === 13) {
                    this.addItem();
                }
            });
        }
    }
</script>

<style scoped>
.add {
    background-color: #e7f3ed73;
}
.red-add {
    background-color: #fff2f2c2;
}
.add , .red-add {
    padding: 20px;
    transition: border 0.3s;
    transition: background 0.3s
}
.add__type_mod {
    width:50%;
    float: right;
    border: 1px solid #e7e7e7;
    height: 44px;
    font-size: 18px;
    text-align: center !important;
    color: inherit;
    font-weight: 300;
    -webkit-transition: border 0.3s;
    transition: border 0.3s;
    margin-top: 6px;
    border: none;
    border-bottom: 1px solid;
    -webkit-appearance: menulist-button
}

.add__type_mod:focus {
    outline: none;
}

</style>