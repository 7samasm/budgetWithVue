import DataItemsService from '../../DataItemsService'
import {mapGetters,mapActions} from 'vuex'

/*
cd ~/budgetApi
*/
export const budgetMixin = {
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
            return this.dataItems.filter(dataItems => dataItems._type === type)
        }
	}
}

