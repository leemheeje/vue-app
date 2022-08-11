<template>
    <div class="jbAddMinArea" ref="addTplParentNode">
        <!-- foreach:S -->
        <div class="amSectListsArea" ref="addTplNode" v-for="(item,index) in toggleArray" :key="index">
            <div class="FLEX ALIGN_ITEM_CENTER">
                <div class="amSectDivAre">
                    <slot name="AddToggleBoxDivision" />
                </div>
                <div class="amSectBtnAre FLEX ALIGN_ITEM_CENTER">
                    <button
                        class="ansbtn ad"
						:value="index"
                        @click="addToggleBox"
                        title="추가"
                    ></button>
                    <button
                        class="ansbtn mn"
						:value="index"
                        @click="minToggleBox"
                        title="삭제"
                    ></button>
                    <slot name="AddToggleBoxButtonArea" />
                </div>
            </div>
            <div class="amSectAntAre" v-if="$slots.AddToggleBoxAntArea">
                <slot name="AddToggleBoxAntArea" />
            </div>
        </div>
        <!-- foreach:E -->
    </div>
</template>

<script>
export default {
	props:['toggleArray'],
    methods: {
        addToggleBox(e) {
            // let t_node = this.$refs.addTplNode.cloneNode(true);
            // let p_node = this.$refs.addTplParentNode;
            // p_node.appendChild(t_node);
             this.$emit("click:AddToggleBox", e);
        },
        minToggleBox(e) {
			// e.target.closest('.amSectListsArea').remove();
             this.$emit("click:MinToggleBox", e);
        },
    },
};
</script>