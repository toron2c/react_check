"use strict";(self.webpackChunkmessenger2000=self.webpackChunkmessenger2000||[]).push([[55],{1055:function(n,t,e){e.r(t),e.d(t,{default:function(){return c}});var i=e(4293),r=e(1412),a={containerDialogs:"ChatsMobile_containerDialogs__txtEs",dialogs:"ChatsMobile_dialogs__cBgs+"},o=e(184);function c(){return(0,o.jsxs)("div",{className:a.containerDialogs,children:[(0,o.jsx)("div",{className:a.dialogs,children:(0,o.jsx)(i.Z,{})}),(0,o.jsx)("div",{className:a.dialogsController,children:(0,o.jsx)(r.Z,{})})]})}},4293:function(n,t,e){e.d(t,{Z:function(){return g}});var i=e(5629),r=e(2791),a=e(5048),o=e(5122),c=e(3398),u=e(2087),s=e(1087),l="DialogItem_item__CJLYu",d="DialogItem_itemName__B1rZ0",h="DialogItem_itemBox__ND-IR",v="DialogItem_buttonChat__6WNqh",f="DialogItem_activeDialog__tI3tu",_="DialogItem_avatar__40lT0",m=e(184);function x(n){var t=n.id,e=n.name,i=n.avatar;return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(u.ZP,{className:l,disablePadding:!0,alignItems:"flex-start",children:(0,m.jsxs)("div",{className:d,children:[i&&(0,m.jsx)("div",{children:(0,m.jsx)("img",{className:_,src:i,width:"24",heigth:"24",alt:"profile avatar"})}),(0,m.jsx)("div",{className:h,children:(0,m.jsx)(s.OL,{className:function(n){return n.isActive?f:v},to:"".concat(t),children:e})})]})})})}function g(){var n=(0,a.I0)(),t=(0,a.v9)((function(n){return n.chats.subscribeActived}),(function(n,t){return n!==t}));(0,r.useEffect)((function(){return n((0,o.H2)()),function(){n((0,o.Q3)())}}),[t,n]);var e=(0,r.useCallback)((function(){return(0,c.vK)()}),[]),u=(0,a.v9)(e()).map((function(n){return(0,m.jsx)(j,{avatar:n.avatar,id:n.linkToDialog,name:n.nameDialog},n.chatId)}));return(0,m.jsx)("div",{children:(0,m.jsx)(i.Z,{dense:!0,children:u})})}var j=r.memo(x)},1412:function(n,t,e){e.d(t,{Z:function(){return _}});var i=e(7205),r=e(2791),a=e(5048),o=e(5122),c=e(3398),u=e(2215),s="InputNewChat_newChatButton__KzopM",l="InputNewChat_error__KlGtR",d="InputNewChat_boxAddedChat__mjI3y",h=e(184);function v(){var n=(0,a.I0)(),t=(0,a.v9)((function(n){return n.chats.nameNewChat})),e=(0,a.v9)((0,c.dq)(),a.wU),r=(0,a.v9)((0,c.dO)(),a.wU);return(0,h.jsxs)("div",{className:d,children:[(0,h.jsx)(u.Z,{error:e,type:"email",required:!0,onChange:function(t){t.preventDefault(),n((0,o.vk)(t.target.value))},value:t,label:"email user",variant:"outlined"}),(0,h.jsxs)("div",{className:s,children:[e&&(0,h.jsx)("div",{className:l,children:r}),(0,h.jsx)(i.Z,{type:"submit",onClick:function(e){e.preventDefault(),n(t?(0,o.rz)():(0,o.xi)())},variant:"contained",children:"add"})]})]})}var f=e(1684);function _(){var n=(0,a.I0)(),t=(0,r.useMemo)((function(){return(0,c.VF)()}),[]),e=(0,a.v9)(t);return(0,h.jsxs)(h.Fragment,{children:[e?(0,h.jsx)(v,{}):(0,h.jsxs)("div",{className:f.Z.buttonAddChat,children:[(0,h.jsx)(i.Z,{onClick:function(t){t.preventDefault(),n((0,o.xi)())},variant:"contained",children:"Add user"})," "]}),(0,h.jsxs)("div",{className:f.Z.nativeAd,children:[(0,h.jsx)("p",{children:"native advertising"}),(0,h.jsx)("p",{children:"pojalusta voz'mite na rabotu!11!11!"}),(0,h.jsx)("p",{className:f.Z.nativeAdDescription,children:"created for fun and experince @toron2c\xa9"})]})]})}},3398:function(n,t,e){function i(){return function(n){return n.chats.chatList}}function r(n){return function(t){return t.chats.chatList.find((function(t){return t.linkToDialog===Number(n)}))}}function a(){return function(n){return n.chats.toggleNewChat}}function o(){return function(n){return n.chats.error.isError}}function c(){return function(n){return n.chats.error.msg}}e.d(t,{VF:function(){return a},dO:function(){return c},dq:function(){return o},iN:function(){return r},vK:function(){return i}})},1684:function(n,t){t.Z={box:"Authorization_box__d3oXS",boxInputs:"Authorization_boxInputs__+R9dV",boxCreateAccount:"Authorization_boxCreateAccount__ekyjg",link:"Authorization_link__rYBKq",nativeAd:"Authorization_nativeAd__fbIrz",buttonAddChat:"Authorization_buttonAddChat__3xG51",nativeAdDescription:"Authorization_nativeAdDescription__qpLsv"}}}]);
//# sourceMappingURL=55.b58ec008.chunk.js.map