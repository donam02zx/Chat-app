import { doc, getDoc } from 'firebase/firestore';
import { create } from 'zustand'
import { db } from './firebase';
import { useUserStore } from './userStore';


export const useChatStore = create((set) => ({
  chatId: null,
  user:null,
  isCurrentUserBlocked:false,
  isReceiverBlocked:false,
  changeChat: (chatId,user)=>{
    const currentUser = useUserStore.getState().currentUser;

    

    // Check if current user is blocked

    if(user.block.includes(currentUser.id)){
        return set({
            chatId,
            user:null,
            isCurrentUserBlocked:true,
            isReceiverBlocked:false,
        })
    }

    // console.log('User:', user);
    // console.log('User Blocked:', user ? user.blocked : 'User is undefined');

    // if (user && user.blocked && Array.isArray(user.blocked) && user.blocked.includes(currentUser.id)) {
    //     return set({
    //         chatId,
    //         user: null,
    //         isCurrentUserBlocked: true,
    //         isReceiverBlocked: false,
    //     });
    // }
    

    // Check if receiver user is blocked
    else if(currentUser.block.includes(user.id)){
        return set({
            chatId,
            user:user,
            isCurrentUserBlocked:false,
            isReceiverBlocked:true,
        });
    }else{
        return set({
            chatId,
            user,
            isCurrentUserBlocked:false,
            isReceiverBlocked:false,
        });
    }

  },
  
  changeBlock: ()=>{
    set(state=>({...state, isReceiverBlocked: !state.isReceiverBlocked}))
  }
})) 