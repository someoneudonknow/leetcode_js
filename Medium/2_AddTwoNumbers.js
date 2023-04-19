/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    let results = new ListNode(l1.val);
    let headl1 = l1;
    let headl2 = l2;
    let headrs = results;
    let remain = 0;

    while(headl1 || headl2) {
        let firstVal = (headl1?.val ? headl1?.val : 0);
        let secondVal = (headl2?.val ? headl2.val : 0);
        let sumTwoEl = firstVal + secondVal + remain;

        if(sumTwoEl > 9) {
            headrs.val = parseInt(sumTwoEl % 10);
            remain = parseInt(sumTwoEl / 10);
        }else {
           headrs.val = sumTwoEl;
           remain = 0;
        }

         if(!headl1?.next && !headl2?.next && remain > 0) {
            headrs.next = new ListNode(remain);
        }

        if(headl1?.next || headl2?.next) {
            headrs.next = new ListNode();
        }
        
        headrs = headrs.next;
        headl1 = headl1?.next;
        headl2 = headl2?.next;
    }

    return results;
};

export default addTwoNumbers;