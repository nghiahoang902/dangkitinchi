import TheMenu from "../components/TheMenu.vue";
import { UserOutlined, LogoutOutlined, AuditOutlined, MenuOutlined } from '@ant-design/icons-vue';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './TheHeader.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'demo-dropdown-wrap'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'ALayoutHeader', typeof __VLS_localComponents, "ALayoutHeader", "aLayoutHeader", "a-layout-header"> &
__VLS_WithComponent<'MenuOutlined', typeof __VLS_localComponents, "MenuOutlined", "MenuOutlined", "MenuOutlined"> &
__VLS_WithComponent<'AButton', typeof __VLS_localComponents, "AButton", "aButton", "a-button"> &
__VLS_WithComponent<'ADrawer', typeof __VLS_localComponents, "ADrawer", "aDrawer", "a-drawer"> &
__VLS_WithComponent<'AMenu', typeof __VLS_localComponents, "AMenu", "aMenu", "a-menu"> &
__VLS_WithComponent<'AMenuItem', typeof __VLS_localComponents, "AMenuItem", "aMenuItem", "a-menu-item"> &
__VLS_WithComponent<'RouterLink', typeof __VLS_localComponents, "RouterLink", "routerLink", "router-link"> &
__VLS_WithComponent<'UserOutlined', typeof __VLS_localComponents, "UserOutlined", "UserOutlined", "UserOutlined"> &
__VLS_WithComponent<'AuditOutlined', typeof __VLS_localComponents, "AuditOutlined", "AuditOutlined", "AuditOutlined"> &
__VLS_WithComponent<'LogoutOutlined', typeof __VLS_localComponents, "LogoutOutlined", "LogoutOutlined", "LogoutOutlined"> &
__VLS_WithComponent<'TheMenu', typeof __VLS_localComponents, "TheMenu", "TheMenu", "TheMenu"> &
__VLS_WithComponent<'ALayoutSider', typeof __VLS_localComponents, "ALayoutSider", "aLayoutSider", "a-layout-sider"> &
__VLS_WithComponent<'AList', typeof __VLS_localComponents, "AList", "aList", "a-list">;
__VLS_components.ALayoutHeader; __VLS_components.ALayoutHeader; __VLS_components.aLayoutHeader; __VLS_components.aLayoutHeader; __VLS_components["a-layout-header"]; __VLS_components["a-layout-header"];
// @ts-ignore
[ALayoutHeader, ALayoutHeader,];
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span;
__VLS_components.MenuOutlined;
// @ts-ignore
[MenuOutlined,];
__VLS_intrinsicElements.img; __VLS_intrinsicElements.img;
__VLS_components.AButton; __VLS_components.AButton; __VLS_components.aButton; __VLS_components.aButton; __VLS_components["a-button"]; __VLS_components["a-button"];
// @ts-ignore
[AButton, AButton,];
__VLS_components.ADrawer; __VLS_components.ADrawer; __VLS_components.ADrawer; __VLS_components.ADrawer; __VLS_components.aDrawer; __VLS_components.aDrawer; __VLS_components.aDrawer; __VLS_components.aDrawer; __VLS_components["a-drawer"]; __VLS_components["a-drawer"]; __VLS_components["a-drawer"]; __VLS_components["a-drawer"];
// @ts-ignore
[ADrawer, ADrawer, ADrawer, ADrawer,];
__VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template; __VLS_intrinsicElements.template;
__VLS_components.AMenu; __VLS_components.AMenu; __VLS_components.aMenu; __VLS_components.aMenu; __VLS_components["a-menu"]; __VLS_components["a-menu"];
// @ts-ignore
[AMenu, AMenu,];
__VLS_components.AMenuItem; __VLS_components.AMenuItem; __VLS_components.AMenuItem; __VLS_components.AMenuItem; __VLS_components.AMenuItem; __VLS_components.AMenuItem; __VLS_components.aMenuItem; __VLS_components.aMenuItem; __VLS_components.aMenuItem; __VLS_components.aMenuItem; __VLS_components.aMenuItem; __VLS_components.aMenuItem; __VLS_components["a-menu-item"]; __VLS_components["a-menu-item"]; __VLS_components["a-menu-item"]; __VLS_components["a-menu-item"]; __VLS_components["a-menu-item"]; __VLS_components["a-menu-item"];
// @ts-ignore
[AMenuItem, AMenuItem, AMenuItem, AMenuItem, AMenuItem, AMenuItem,];
__VLS_components.RouterLink; __VLS_components.RouterLink; __VLS_components.RouterLink; __VLS_components.RouterLink; __VLS_components.routerLink; __VLS_components.routerLink; __VLS_components.routerLink; __VLS_components.routerLink; __VLS_components["router-link"]; __VLS_components["router-link"]; __VLS_components["router-link"]; __VLS_components["router-link"];
// @ts-ignore
[RouterLink, RouterLink, RouterLink, RouterLink,];
__VLS_components.UserOutlined;
// @ts-ignore
[UserOutlined,];
__VLS_components.AuditOutlined;
// @ts-ignore
[AuditOutlined,];
__VLS_components.LogoutOutlined; __VLS_components.LogoutOutlined;
// @ts-ignore
[LogoutOutlined, LogoutOutlined,];
__VLS_components.TheMenu; __VLS_components.TheMenu;
// @ts-ignore
[TheMenu, TheMenu,];
__VLS_components.ALayoutSider; __VLS_components.ALayoutSider; __VLS_components.aLayoutSider; __VLS_components.aLayoutSider; __VLS_components["a-layout-sider"]; __VLS_components["a-layout-sider"];
// @ts-ignore
[ALayoutSider, ALayoutSider,];
__VLS_components.AList; __VLS_components.AList; __VLS_components.aList; __VLS_components.aList; __VLS_components["a-list"]; __VLS_components["a-list"];
// @ts-ignore
[AList, AList,];
{
const __VLS_0 = ({} as 'ALayoutHeader' extends keyof typeof __VLS_ctx ? { 'ALayoutHeader': typeof __VLS_ctx.ALayoutHeader; } : 'aLayoutHeader' extends keyof typeof __VLS_ctx ? { 'ALayoutHeader': typeof __VLS_ctx.aLayoutHeader; } : 'a-layout-header' extends keyof typeof __VLS_ctx ? { 'ALayoutHeader': (typeof __VLS_ctx)["a-layout-header"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ALayoutHeader;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, class: (('header')), }));
({} as { ALayoutHeader: typeof __VLS_0; }).ALayoutHeader;
({} as { ALayoutHeader: typeof __VLS_0; }).ALayoutHeader;
const __VLS_2 = __VLS_1({ ...{}, class: (('header')), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: (('header')), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
__VLS_styleScopedClasses = ('header');
{
const __VLS_5 = __VLS_intrinsicElements["div"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, class: ("container-fluid"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("container-fluid"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["div"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, class: ("row text-white"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, class: ("row text-white"), style: ({}), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = __VLS_intrinsicElements["div"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{}, class: ("col-1 d-flex d-sm-none align-items-center justify-content-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, class: ("col-1 d-flex d-sm-none align-items-center justify-content-center"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
const __VLS_20 = __VLS_intrinsicElements["span"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
const __VLS_22 = __VLS_21({ ...{ onClick: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
let __VLS_25 = { 'click': __VLS_pickEvent(__VLS_24['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_21, typeof __VLS_22>).onClick) };
__VLS_25 = {
click: $event => {
__VLS_ctx.showDrawer();
// @ts-ignore
[showDrawer,];
}
};
{
const __VLS_26 = ({} as 'MenuOutlined' extends keyof typeof __VLS_ctx ? { 'MenuOutlined': typeof __VLS_ctx.MenuOutlined; } : typeof __VLS_resolvedLocalAndGlobalComponents).MenuOutlined;
const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{}, }));
({} as { MenuOutlined: typeof __VLS_26; }).MenuOutlined;
const __VLS_28 = __VLS_27({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_27));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_26, typeof __VLS_28> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28)!;
let __VLS_30!: __VLS_NormalizeEmits<typeof __VLS_29.emit>;
}
(__VLS_23.slots!).default;
}
(__VLS_18.slots!).default;
}
{
const __VLS_31 = __VLS_intrinsicElements["div"];
const __VLS_32 = __VLS_elementAsFunctionalComponent(__VLS_31);
const __VLS_33 = __VLS_32({ ...{}, class: ("\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0063\u006f\u006c\u002d\u0031\u0030\u0020\u0063\u006f\u006c\u002d\u0073\u006d\u002d\u0039\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0064\u002d\u0066\u006c\u0065\u0078\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0061\u006c\u0069\u0067\u006e\u002d\u0069\u0074\u0065\u006d\u0073\u002d\u0063\u0065\u006e\u0074\u0065\u0072\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u006a\u0075\u0073\u0074\u0069\u0066\u0079\u002d\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0063\u0065\u006e\u0074\u0065\u0072\u0020\u006a\u0075\u0073\u0074\u0069\u0066\u0079\u002d\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0073\u006d\u002d\u0073\u0074\u0061\u0072\u0074\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020"), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_31, typeof __VLS_33> & Record<string, unknown>) => void)({ ...{}, class: ("\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0063\u006f\u006c\u002d\u0031\u0030\u0020\u0063\u006f\u006c\u002d\u0073\u006d\u002d\u0039\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0064\u002d\u0066\u006c\u0065\u0078\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0061\u006c\u0069\u0067\u006e\u002d\u0069\u0074\u0065\u006d\u0073\u002d\u0063\u0065\u006e\u0074\u0065\u0072\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u006a\u0075\u0073\u0074\u0069\u0066\u0079\u002d\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0063\u0065\u006e\u0074\u0065\u0072\u0020\u006a\u0075\u0073\u0074\u0069\u0066\u0079\u002d\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0073\u006d\u002d\u0073\u0074\u0061\u0072\u0074\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020"), });
const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33)!;
let __VLS_35!: __VLS_NormalizeEmits<typeof __VLS_34.emit>;
{
const __VLS_36 = __VLS_intrinsicElements["img"];
const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
const __VLS_38 = __VLS_37({ ...{}, src: ("/templates/image/logo.jpg"), alt: ("Logo"), height: ("32"), width: ("34"), class: ("ms-3 me-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_36, typeof __VLS_38> & Record<string, unknown>) => void)({ ...{}, src: ("/templates/image/logo.jpg"), alt: ("Logo"), height: ("32"), width: ("34"), class: ("ms-3 me-3"), });
const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38)!;
let __VLS_40!: __VLS_NormalizeEmits<typeof __VLS_39.emit>;
}
{
const __VLS_41 = __VLS_intrinsicElements["span"];
const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
const __VLS_43 = __VLS_42({ ...{}, class: ("d-none d-sm-flex"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_43> & Record<string, unknown>) => void)({ ...{}, class: ("d-none d-sm-flex"), });
const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43)!;
let __VLS_45!: __VLS_NormalizeEmits<typeof __VLS_44.emit>;
(__VLS_44.slots!).default;
}
(__VLS_34.slots!).default;
}
{
const __VLS_46 = __VLS_intrinsicElements["div"];
const __VLS_47 = __VLS_elementAsFunctionalComponent(__VLS_46);
const __VLS_48 = __VLS_47({ ...{}, class: ("\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0063\u006f\u006c\u002d\u0073\u006d\u002d\u0033\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0064\u002d\u006e\u006f\u006e\u0065\u0020\u0064\u002d\u0073\u006d\u002d\u0066\u006c\u0065\u0078\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0061\u006c\u0069\u0067\u006e\u002d\u0069\u0074\u0065\u006d\u0073\u002d\u0063\u0065\u006e\u0074\u0065\u0072\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u006a\u0075\u0073\u0074\u0069\u0066\u0079\u002d\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0073\u006d\u002d\u0065\u006e\u0064\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020"), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_46, typeof __VLS_48> & Record<string, unknown>) => void)({ ...{}, class: ("\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0063\u006f\u006c\u002d\u0073\u006d\u002d\u0033\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0064\u002d\u006e\u006f\u006e\u0065\u0020\u0064\u002d\u0073\u006d\u002d\u0066\u006c\u0065\u0078\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0061\u006c\u0069\u0067\u006e\u002d\u0069\u0074\u0065\u006d\u0073\u002d\u0063\u0065\u006e\u0074\u0065\u0072\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u006a\u0075\u0073\u0074\u0069\u0066\u0079\u002d\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0073\u006d\u002d\u0065\u006e\u0064\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020"), });
const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48)!;
let __VLS_50!: __VLS_NormalizeEmits<typeof __VLS_49.emit>;
{
const __VLS_51 = __VLS_intrinsicElements["div"];
const __VLS_52 = __VLS_elementAsFunctionalComponent(__VLS_51);
const __VLS_53 = __VLS_52({ ...{}, class: ("demo-dropdown-wrap"), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_51, typeof __VLS_53> & Record<string, unknown>) => void)({ ...{}, class: ("demo-dropdown-wrap"), });
const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53)!;
let __VLS_55!: __VLS_NormalizeEmits<typeof __VLS_54.emit>;
{
const __VLS_56 = ({} as 'AButton' extends keyof typeof __VLS_ctx ? { 'AButton': typeof __VLS_ctx.AButton; } : 'aButton' extends keyof typeof __VLS_ctx ? { 'AButton': typeof __VLS_ctx.aButton; } : 'a-button' extends keyof typeof __VLS_ctx ? { 'AButton': (typeof __VLS_ctx)["a-button"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).AButton;
const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ ...{ onClick: {} as any, }, }));
({} as { AButton: typeof __VLS_56; }).AButton;
({} as { AButton: typeof __VLS_56; }).AButton;
const __VLS_58 = __VLS_57({ ...{ onClick: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_57));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_56, typeof __VLS_58> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, });
const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58)!;
let __VLS_60!: __VLS_NormalizeEmits<typeof __VLS_59.emit>;
let __VLS_61 = { 'click': __VLS_pickEvent(__VLS_60['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_57, typeof __VLS_58>).onClick) };
__VLS_61 = { click: (__VLS_ctx.showDrawerUser) };
(__VLS_ctx.fullname);
(__VLS_59.slots!).default;
}
{
const __VLS_62 = ({} as 'ADrawer' extends keyof typeof __VLS_ctx ? { 'ADrawer': typeof __VLS_ctx.ADrawer; } : 'aDrawer' extends keyof typeof __VLS_ctx ? { 'ADrawer': typeof __VLS_ctx.aDrawer; } : 'a-drawer' extends keyof typeof __VLS_ctx ? { 'ADrawer': (typeof __VLS_ctx)["a-drawer"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ADrawer;
const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({ ...{ onClose: {} as any, onAfterOpenChange: {} as any, }, open: ((__VLS_ctx.visible_user)), placement: ("right"), footerStyle: (({ textAlign: 'right' })), }));
({} as { ADrawer: typeof __VLS_62; }).ADrawer;
({} as { ADrawer: typeof __VLS_62; }).ADrawer;
const __VLS_64 = __VLS_63({ ...{ onClose: {} as any, onAfterOpenChange: {} as any, }, open: ((__VLS_ctx.visible_user)), placement: ("right"), footerStyle: (({ textAlign: 'right' })), }, ...__VLS_functionalComponentArgsRest(__VLS_63));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_62, typeof __VLS_64> & Record<string, unknown>) => void)({ ...{ onClose: {} as any, onAfterOpenChange: {} as any, }, open: ((__VLS_ctx.visible_user)), placement: ("right"), footerStyle: (({ textAlign: 'right' })), });
const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64)!;
let __VLS_66!: __VLS_NormalizeEmits<typeof __VLS_65.emit>;
let __VLS_67 = { 'close': __VLS_pickEvent(__VLS_66['close'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_63, typeof __VLS_64>).onClose) };
__VLS_67 = { close: (__VLS_ctx.closeDrawerUser) };
let __VLS_68 = { 'after-open-change': __VLS_pickEvent(__VLS_66['after-open-change'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_63, typeof __VLS_64>).onAfterOpenChange) };
__VLS_68 = { "after-open-change": (__VLS_ctx.afterOpenChange) };
{
const __VLS_69 = __VLS_intrinsicElements["template"];
const __VLS_70 = __VLS_elementAsFunctionalComponent(__VLS_69);
const __VLS_71 = __VLS_70({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_70));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_69, typeof __VLS_71> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_65.slots!).default;
{
const __VLS_72 = __VLS_intrinsicElements["img"];
const __VLS_73 = __VLS_elementAsFunctionalComponent(__VLS_72);
const __VLS_74 = __VLS_73({ ...{}, src: ("/templates/image/logo.jpg"), alt: ("Logo"), width: ("100%"), class: ("ms-3 me-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_72, typeof __VLS_74> & Record<string, unknown>) => void)({ ...{}, src: ("/templates/image/logo.jpg"), alt: ("Logo"), width: ("100%"), class: ("ms-3 me-3"), });
const __VLS_75 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74)!;
let __VLS_76!: __VLS_NormalizeEmits<typeof __VLS_75.emit>;
}
{
const __VLS_77 = ({} as 'AMenu' extends keyof typeof __VLS_ctx ? { 'AMenu': typeof __VLS_ctx.AMenu; } : 'aMenu' extends keyof typeof __VLS_ctx ? { 'AMenu': typeof __VLS_ctx.aMenu; } : 'a-menu' extends keyof typeof __VLS_ctx ? { 'AMenu': (typeof __VLS_ctx)["a-menu"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).AMenu;
const __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({ ...{}, }));
({} as { AMenu: typeof __VLS_77; }).AMenu;
({} as { AMenu: typeof __VLS_77; }).AMenu;
const __VLS_79 = __VLS_78({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_78));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_77, typeof __VLS_79> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_80 = __VLS_pickFunctionalComponentCtx(__VLS_77, __VLS_79)!;
let __VLS_81!: __VLS_NormalizeEmits<typeof __VLS_80.emit>;
{
const __VLS_82 = ({} as 'AMenuItem' extends keyof typeof __VLS_ctx ? { 'AMenuItem': typeof __VLS_ctx.AMenuItem; } : 'aMenuItem' extends keyof typeof __VLS_ctx ? { 'AMenuItem': typeof __VLS_ctx.aMenuItem; } : 'a-menu-item' extends keyof typeof __VLS_ctx ? { 'AMenuItem': (typeof __VLS_ctx)["a-menu-item"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).AMenuItem;
const __VLS_83 = __VLS_asFunctionalComponent(__VLS_82, new __VLS_82({ ...{}, key: ("account"), }));
({} as { AMenuItem: typeof __VLS_82; }).AMenuItem;
({} as { AMenuItem: typeof __VLS_82; }).AMenuItem;
const __VLS_84 = __VLS_83({ ...{}, key: ("account"), }, ...__VLS_functionalComponentArgsRest(__VLS_83));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_82, typeof __VLS_84> & Record<string, unknown>) => void)({ ...{}, key: ("account"), });
const __VLS_85 = __VLS_pickFunctionalComponentCtx(__VLS_82, __VLS_84)!;
let __VLS_86!: __VLS_NormalizeEmits<typeof __VLS_85.emit>;
{
const __VLS_87 = ({} as 'RouterLink' extends keyof typeof __VLS_ctx ? { 'RouterLink': typeof __VLS_ctx.RouterLink; } : 'routerLink' extends keyof typeof __VLS_ctx ? { 'RouterLink': typeof __VLS_ctx.routerLink; } : 'router-link' extends keyof typeof __VLS_ctx ? { 'RouterLink': (typeof __VLS_ctx)["router-link"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).RouterLink;
const __VLS_88 = __VLS_asFunctionalComponent(__VLS_87, new __VLS_87({ ...{}, to: (({ name: 'account' })), }));
({} as { RouterLink: typeof __VLS_87; }).RouterLink;
({} as { RouterLink: typeof __VLS_87; }).RouterLink;
const __VLS_89 = __VLS_88({ ...{}, to: (({ name: 'account' })), }, ...__VLS_functionalComponentArgsRest(__VLS_88));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_87, typeof __VLS_89> & Record<string, unknown>) => void)({ ...{}, to: (({ name: 'account' })), });
const __VLS_90 = __VLS_pickFunctionalComponentCtx(__VLS_87, __VLS_89)!;
let __VLS_91!: __VLS_NormalizeEmits<typeof __VLS_90.emit>;
{
const __VLS_92 = __VLS_intrinsicElements["span"];
const __VLS_93 = __VLS_elementAsFunctionalComponent(__VLS_92);
const __VLS_94 = __VLS_93({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_93));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_92, typeof __VLS_94> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_95 = __VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94)!;
let __VLS_96!: __VLS_NormalizeEmits<typeof __VLS_95.emit>;
{
const __VLS_97 = ({} as 'UserOutlined' extends keyof typeof __VLS_ctx ? { 'UserOutlined': typeof __VLS_ctx.UserOutlined; } : typeof __VLS_resolvedLocalAndGlobalComponents).UserOutlined;
const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({ ...{}, }));
({} as { UserOutlined: typeof __VLS_97; }).UserOutlined;
const __VLS_99 = __VLS_98({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_98));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_97, typeof __VLS_99> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_100 = __VLS_pickFunctionalComponentCtx(__VLS_97, __VLS_99)!;
let __VLS_101!: __VLS_NormalizeEmits<typeof __VLS_100.emit>;
}
(__VLS_95.slots!).default;
}
(__VLS_90.slots!).default;
}
(__VLS_85.slots!).default;
}
{
const __VLS_102 = ({} as 'AMenuItem' extends keyof typeof __VLS_ctx ? { 'AMenuItem': typeof __VLS_ctx.AMenuItem; } : 'aMenuItem' extends keyof typeof __VLS_ctx ? { 'AMenuItem': typeof __VLS_ctx.aMenuItem; } : 'a-menu-item' extends keyof typeof __VLS_ctx ? { 'AMenuItem': (typeof __VLS_ctx)["a-menu-item"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).AMenuItem;
const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({ ...{}, key: ("result"), }));
({} as { AMenuItem: typeof __VLS_102; }).AMenuItem;
({} as { AMenuItem: typeof __VLS_102; }).AMenuItem;
const __VLS_104 = __VLS_103({ ...{}, key: ("result"), }, ...__VLS_functionalComponentArgsRest(__VLS_103));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_102, typeof __VLS_104> & Record<string, unknown>) => void)({ ...{}, key: ("result"), });
const __VLS_105 = __VLS_pickFunctionalComponentCtx(__VLS_102, __VLS_104)!;
let __VLS_106!: __VLS_NormalizeEmits<typeof __VLS_105.emit>;
{
const __VLS_107 = ({} as 'RouterLink' extends keyof typeof __VLS_ctx ? { 'RouterLink': typeof __VLS_ctx.RouterLink; } : 'routerLink' extends keyof typeof __VLS_ctx ? { 'RouterLink': typeof __VLS_ctx.routerLink; } : 'router-link' extends keyof typeof __VLS_ctx ? { 'RouterLink': (typeof __VLS_ctx)["router-link"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).RouterLink;
const __VLS_108 = __VLS_asFunctionalComponent(__VLS_107, new __VLS_107({ ...{}, to: (({ name: 'result' })), }));
({} as { RouterLink: typeof __VLS_107; }).RouterLink;
({} as { RouterLink: typeof __VLS_107; }).RouterLink;
const __VLS_109 = __VLS_108({ ...{}, to: (({ name: 'result' })), }, ...__VLS_functionalComponentArgsRest(__VLS_108));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_107, typeof __VLS_109> & Record<string, unknown>) => void)({ ...{}, to: (({ name: 'result' })), });
const __VLS_110 = __VLS_pickFunctionalComponentCtx(__VLS_107, __VLS_109)!;
let __VLS_111!: __VLS_NormalizeEmits<typeof __VLS_110.emit>;
{
const __VLS_112 = __VLS_intrinsicElements["span"];
const __VLS_113 = __VLS_elementAsFunctionalComponent(__VLS_112);
const __VLS_114 = __VLS_113({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_113));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_112, typeof __VLS_114> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_115 = __VLS_pickFunctionalComponentCtx(__VLS_112, __VLS_114)!;
let __VLS_116!: __VLS_NormalizeEmits<typeof __VLS_115.emit>;
{
const __VLS_117 = ({} as 'AuditOutlined' extends keyof typeof __VLS_ctx ? { 'AuditOutlined': typeof __VLS_ctx.AuditOutlined; } : typeof __VLS_resolvedLocalAndGlobalComponents).AuditOutlined;
const __VLS_118 = __VLS_asFunctionalComponent(__VLS_117, new __VLS_117({ ...{}, }));
({} as { AuditOutlined: typeof __VLS_117; }).AuditOutlined;
const __VLS_119 = __VLS_118({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_118));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_117, typeof __VLS_119> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_120 = __VLS_pickFunctionalComponentCtx(__VLS_117, __VLS_119)!;
let __VLS_121!: __VLS_NormalizeEmits<typeof __VLS_120.emit>;
}
(__VLS_115.slots!).default;
}
(__VLS_110.slots!).default;
}
(__VLS_105.slots!).default;
}
{
const __VLS_122 = ({} as 'AMenuItem' extends keyof typeof __VLS_ctx ? { 'AMenuItem': typeof __VLS_ctx.AMenuItem; } : 'aMenuItem' extends keyof typeof __VLS_ctx ? { 'AMenuItem': typeof __VLS_ctx.aMenuItem; } : 'a-menu-item' extends keyof typeof __VLS_ctx ? { 'AMenuItem': (typeof __VLS_ctx)["a-menu-item"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).AMenuItem;
const __VLS_123 = __VLS_asFunctionalComponent(__VLS_122, new __VLS_122({ ...{ onClick: {} as any, }, key: ("logout"), }));
({} as { AMenuItem: typeof __VLS_122; }).AMenuItem;
({} as { AMenuItem: typeof __VLS_122; }).AMenuItem;
const __VLS_124 = __VLS_123({ ...{ onClick: {} as any, }, key: ("logout"), }, ...__VLS_functionalComponentArgsRest(__VLS_123));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_122, typeof __VLS_124> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, key: ("logout"), });
const __VLS_125 = __VLS_pickFunctionalComponentCtx(__VLS_122, __VLS_124)!;
let __VLS_126!: __VLS_NormalizeEmits<typeof __VLS_125.emit>;
let __VLS_127 = { 'click': __VLS_pickEvent(__VLS_126['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_123, typeof __VLS_124>).onClick) };
__VLS_127 = { click: (__VLS_ctx.logout) };
{
const __VLS_128 = ({} as 'LogoutOutlined' extends keyof typeof __VLS_ctx ? { 'LogoutOutlined': typeof __VLS_ctx.LogoutOutlined; } : typeof __VLS_resolvedLocalAndGlobalComponents).LogoutOutlined;
const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128({ ...{}, }));
({} as { LogoutOutlined: typeof __VLS_128; }).LogoutOutlined;
const __VLS_130 = __VLS_129({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_129));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_128, typeof __VLS_130> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_131 = __VLS_pickFunctionalComponentCtx(__VLS_128, __VLS_130)!;
let __VLS_132!: __VLS_NormalizeEmits<typeof __VLS_131.emit>;
}
(__VLS_125.slots!).default;
}
(__VLS_80.slots!).default;
}
// @ts-ignore
[showDrawerUser, fullname, visible_user, visible_user, visible_user, closeDrawerUser, afterOpenChange, logout,];
}
}
}
(__VLS_54.slots!).default;
}
(__VLS_49.slots!).default;
}
{
const __VLS_133 = __VLS_intrinsicElements["div"];
const __VLS_134 = __VLS_elementAsFunctionalComponent(__VLS_133);
const __VLS_135 = __VLS_134({ ...{}, class: ("col-1 d-flex d-sm-none align-items-center justify-content-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_134));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_133, typeof __VLS_135> & Record<string, unknown>) => void)({ ...{}, class: ("col-1 d-flex d-sm-none align-items-center justify-content-center"), });
const __VLS_136 = __VLS_pickFunctionalComponentCtx(__VLS_133, __VLS_135)!;
let __VLS_137!: __VLS_NormalizeEmits<typeof __VLS_136.emit>;
{
const __VLS_138 = __VLS_intrinsicElements["span"];
const __VLS_139 = __VLS_elementAsFunctionalComponent(__VLS_138);
const __VLS_140 = __VLS_139({ ...{ onClick: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_139));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_138, typeof __VLS_140> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, });
const __VLS_141 = __VLS_pickFunctionalComponentCtx(__VLS_138, __VLS_140)!;
let __VLS_142!: __VLS_NormalizeEmits<typeof __VLS_141.emit>;
let __VLS_143 = { 'click': __VLS_pickEvent(__VLS_142['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_139, typeof __VLS_140>).onClick) };
__VLS_143 = {
click: $event => {
__VLS_ctx.showDrawerUser();
// @ts-ignore
[showDrawerUser,];
}
};
{
const __VLS_144 = ({} as 'LogoutOutlined' extends keyof typeof __VLS_ctx ? { 'LogoutOutlined': typeof __VLS_ctx.LogoutOutlined; } : typeof __VLS_resolvedLocalAndGlobalComponents).LogoutOutlined;
const __VLS_145 = __VLS_asFunctionalComponent(__VLS_144, new __VLS_144({ ...{}, }));
({} as { LogoutOutlined: typeof __VLS_144; }).LogoutOutlined;
const __VLS_146 = __VLS_145({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_145));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_144, typeof __VLS_146> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_147 = __VLS_pickFunctionalComponentCtx(__VLS_144, __VLS_146)!;
let __VLS_148!: __VLS_NormalizeEmits<typeof __VLS_147.emit>;
}
(__VLS_141.slots!).default;
}
(__VLS_136.slots!).default;
}
(__VLS_13.slots!).default;
}
(__VLS_8.slots!).default;
}
(__VLS_3.slots!).default;
}
{
const __VLS_149 = __VLS_intrinsicElements["div"];
const __VLS_150 = __VLS_elementAsFunctionalComponent(__VLS_149);
const __VLS_151 = __VLS_150({ ...{}, class: ("col-sm-2 d-none d-sm-flex"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_150));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_149, typeof __VLS_151> & Record<string, unknown>) => void)({ ...{}, class: ("col-sm-2 d-none d-sm-flex"), style: ({}), });
const __VLS_152 = __VLS_pickFunctionalComponentCtx(__VLS_149, __VLS_151)!;
let __VLS_153!: __VLS_NormalizeEmits<typeof __VLS_152.emit>;
{
const __VLS_154 = ({} as 'ADrawer' extends keyof typeof __VLS_ctx ? { 'ADrawer': typeof __VLS_ctx.ADrawer; } : 'aDrawer' extends keyof typeof __VLS_ctx ? { 'ADrawer': typeof __VLS_ctx.aDrawer; } : 'a-drawer' extends keyof typeof __VLS_ctx ? { 'ADrawer': (typeof __VLS_ctx)["a-drawer"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ADrawer;
const __VLS_155 = __VLS_asFunctionalComponent(__VLS_154, new __VLS_154({ ...{ onClose: {} as any, }, open: ((__VLS_ctx.visible)), title: ("DANH MỤC"), placement: ("left"), }));
({} as { ADrawer: typeof __VLS_154; }).ADrawer;
({} as { ADrawer: typeof __VLS_154; }).ADrawer;
const __VLS_156 = __VLS_155({ ...{ onClose: {} as any, }, open: ((__VLS_ctx.visible)), title: ("DANH MỤC"), placement: ("left"), }, ...__VLS_functionalComponentArgsRest(__VLS_155));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_154, typeof __VLS_156> & Record<string, unknown>) => void)({ ...{ onClose: {} as any, }, open: ((__VLS_ctx.visible)), title: ("DANH MỤC"), placement: ("left"), });
const __VLS_157 = __VLS_pickFunctionalComponentCtx(__VLS_154, __VLS_156)!;
let __VLS_158!: __VLS_NormalizeEmits<typeof __VLS_157.emit>;
let __VLS_159 = { 'close': __VLS_pickEvent(__VLS_158['close'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_155, typeof __VLS_156>).onClose) };
__VLS_159 = { close: (__VLS_ctx.closeDrawer) };
{
const __VLS_160 = __VLS_intrinsicElements["template"];
const __VLS_161 = __VLS_elementAsFunctionalComponent(__VLS_160);
const __VLS_162 = __VLS_161({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_161));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_160, typeof __VLS_162> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_157.slots!).default;
{
const __VLS_163 = ({} as 'TheMenu' extends keyof typeof __VLS_ctx ? { 'TheMenu': typeof __VLS_ctx.TheMenu; } : typeof __VLS_resolvedLocalAndGlobalComponents).TheMenu;
const __VLS_164 = __VLS_asFunctionalComponent(__VLS_163, new __VLS_163({ ...{}, }));
({} as { TheMenu: typeof __VLS_163; }).TheMenu;
const __VLS_165 = __VLS_164({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_164));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_163, typeof __VLS_165> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_166 = __VLS_pickFunctionalComponentCtx(__VLS_163, __VLS_165)!;
let __VLS_167!: __VLS_NormalizeEmits<typeof __VLS_166.emit>;
}
// @ts-ignore
[visible, visible, visible, closeDrawer,];
}
}
}
{
const __VLS_168 = ({} as 'ALayoutSider' extends keyof typeof __VLS_ctx ? { 'ALayoutSider': typeof __VLS_ctx.ALayoutSider; } : 'aLayoutSider' extends keyof typeof __VLS_ctx ? { 'ALayoutSider': typeof __VLS_ctx.aLayoutSider; } : 'a-layout-sider' extends keyof typeof __VLS_ctx ? { 'ALayoutSider': (typeof __VLS_ctx)["a-layout-sider"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ALayoutSider;
const __VLS_169 = __VLS_asFunctionalComponent(__VLS_168, new __VLS_168({ ...{}, collapsed: ((__VLS_ctx.collapsed)), collapsible: (true), }));
({} as { ALayoutSider: typeof __VLS_168; }).ALayoutSider;
({} as { ALayoutSider: typeof __VLS_168; }).ALayoutSider;
const __VLS_170 = __VLS_169({ ...{}, collapsed: ((__VLS_ctx.collapsed)), collapsible: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_169));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_168, typeof __VLS_170> & Record<string, unknown>) => void)({ ...{}, collapsed: ((__VLS_ctx.collapsed)), collapsible: (true), });
const __VLS_171 = __VLS_pickFunctionalComponentCtx(__VLS_168, __VLS_170)!;
let __VLS_172!: __VLS_NormalizeEmits<typeof __VLS_171.emit>;
{
const __VLS_173 = ({} as 'AList' extends keyof typeof __VLS_ctx ? { 'AList': typeof __VLS_ctx.AList; } : 'aList' extends keyof typeof __VLS_ctx ? { 'AList': typeof __VLS_ctx.aList; } : 'a-list' extends keyof typeof __VLS_ctx ? { 'AList': (typeof __VLS_ctx)["a-list"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).AList;
const __VLS_174 = __VLS_asFunctionalComponent(__VLS_173, new __VLS_173({ ...{}, bordered: (true), style: ({}), }));
({} as { AList: typeof __VLS_173; }).AList;
({} as { AList: typeof __VLS_173; }).AList;
const __VLS_175 = __VLS_174({ ...{}, bordered: (true), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_174));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_173, typeof __VLS_175> & Record<string, unknown>) => void)({ ...{}, bordered: (true), style: ({}), });
const __VLS_176 = __VLS_pickFunctionalComponentCtx(__VLS_173, __VLS_175)!;
let __VLS_177!: __VLS_NormalizeEmits<typeof __VLS_176.emit>;
{
const __VLS_178 = __VLS_intrinsicElements["template"];
const __VLS_179 = __VLS_elementAsFunctionalComponent(__VLS_178);
const __VLS_180 = __VLS_179({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_179));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_178, typeof __VLS_180> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_176.slots!).header;
{
const __VLS_181 = __VLS_intrinsicElements["div"];
const __VLS_182 = __VLS_elementAsFunctionalComponent(__VLS_181);
const __VLS_183 = __VLS_182({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_182));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_181, typeof __VLS_183> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_184 = __VLS_pickFunctionalComponentCtx(__VLS_181, __VLS_183)!;
let __VLS_185!: __VLS_NormalizeEmits<typeof __VLS_184.emit>;
(__VLS_184.slots!).default;
}
// @ts-ignore
[collapsed, collapsed, collapsed,];
}
}
{
const __VLS_186 = ({} as 'TheMenu' extends keyof typeof __VLS_ctx ? { 'TheMenu': typeof __VLS_ctx.TheMenu; } : typeof __VLS_resolvedLocalAndGlobalComponents).TheMenu;
const __VLS_187 = __VLS_asFunctionalComponent(__VLS_186, new __VLS_186({ ...{}, }));
({} as { TheMenu: typeof __VLS_186; }).TheMenu;
const __VLS_188 = __VLS_187({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_187));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_186, typeof __VLS_188> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_189 = __VLS_pickFunctionalComponentCtx(__VLS_186, __VLS_188)!;
let __VLS_190!: __VLS_NormalizeEmits<typeof __VLS_189.emit>;
}
}
(__VLS_171.slots!).default;
}
(__VLS_152.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["container-fluid"];
__VLS_styleScopedClasses["row"];
__VLS_styleScopedClasses["text-white"];
__VLS_styleScopedClasses["col-1"];
__VLS_styleScopedClasses["d-flex"];
__VLS_styleScopedClasses["d-sm-none"];
__VLS_styleScopedClasses["align-items-center"];
__VLS_styleScopedClasses["justify-content-center"];
__VLS_styleScopedClasses["col-10"];
__VLS_styleScopedClasses["col-sm-9"];
__VLS_styleScopedClasses["d-flex"];
__VLS_styleScopedClasses["align-items-center"];
__VLS_styleScopedClasses["justify-content-center"];
__VLS_styleScopedClasses["justify-content-sm-start"];
__VLS_styleScopedClasses["ms-3"];
__VLS_styleScopedClasses["me-3"];
__VLS_styleScopedClasses["d-none"];
__VLS_styleScopedClasses["d-sm-flex"];
__VLS_styleScopedClasses["col-sm-3"];
__VLS_styleScopedClasses["d-none"];
__VLS_styleScopedClasses["d-sm-flex"];
__VLS_styleScopedClasses["align-items-center"];
__VLS_styleScopedClasses["justify-content-sm-end"];
__VLS_styleScopedClasses["demo-dropdown-wrap"];
__VLS_styleScopedClasses["ms-3"];
__VLS_styleScopedClasses["me-3"];
__VLS_styleScopedClasses["col-1"];
__VLS_styleScopedClasses["d-flex"];
__VLS_styleScopedClasses["d-sm-none"];
__VLS_styleScopedClasses["align-items-center"];
__VLS_styleScopedClasses["justify-content-center"];
__VLS_styleScopedClasses["col-sm-2"];
__VLS_styleScopedClasses["d-none"];
__VLS_styleScopedClasses["d-sm-flex"];
}
var __VLS_slots!: {};
return __VLS_slots;
}
