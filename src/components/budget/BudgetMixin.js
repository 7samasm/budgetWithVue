import DataItemsService from '../../DataItemsService'

export const budgetMixin = {
    data()
    {
        return {
            totals : {
                inc : 0,
                exp : 0
            }
        }
    },
    computed :
    {
        dataItems(){
           return this.$store.state.data
        }
    },
    watch : 
    {
        dataItems()
        {
            console.log('watch called from mixin')
            // calculate totals incs & exps
            this.calculateTotal('inc')
            this.calculateTotal('exp')                         
        }
    },
	methods : 
	{
        calculateTotal(type)
        {
            let sum = 0 , total;
            total =  this.getItemsByType(type);
            total.forEach(cur => {
                sum += cur._value
            });
            this.totals[type] = sum;
        },
        getItemsByType(type)
        {
            let arr = []
            arr = this.dataItems.filter(dataItems => dataItems._type === type)
            return arr;
        }
	}
}