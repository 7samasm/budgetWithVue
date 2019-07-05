import DataItemsService from '../../DataItemsService'
import {mapGetters,mapActions} from 'vuex/helpers'


export const budgetMixin = {
    data(){
        return {
            incomes : 0
        }
    },
    computed :
    {
        ...mapGetters({
            dataItems  : 'dataItems',
            totals     : 'totals',
            budget     : 'budget',
            percentage : 'percentage'
        })
    },
    watch : 
    {
        dataItems()
        {
            console.log(this.getItemsByType('inc'))
            console.log('watch called from mixin')
            // calculate totals incs & exps
            this.calculateTotal('inc')
            this.calculateTotal('exp')                         
        }
    },
	methods : 
	{
        ...mapActions({
            calculateTotal: 'calculateTotal'
        }),
        getItemsByType(type)
        {
            // let arr = []
            // try {
            //     DataItemsService.getByType(type).then((data)=>{
            //         for(let d of data){
            //             arr.push(d)
            //         }
            //     })
            //     return arr;
            // } catch(e) {
            //     console.log(e);
            // }
            // return arr;
            return this.dataItems.filter(dataItems => dataItems._type === type)
        }
	},
    async created(){
        this.incomes = await DataItemsService.getByType('inc')
    }
}