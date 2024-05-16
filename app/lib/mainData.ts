import { ROUTES } from "./constants";
import { IconNames } from "../ui/components/SVGComponents/Icon";

interface IWorkingTime {
    title: string
    time: {
        from: string,
        to: string
    }
}

interface IMenuButton {
    title: string,
    icon: IconNames,
    link: string
}

interface ILink {
    title: string,
    link: string
}

interface IMainData {
    workingTime: IWorkingTime
    contacts: {
        tel: string
    }
    callback: {
        title: string
    },
    totalPrice: {
        title: string
    },
    buttons: {
        catalog: {
            title: string,
            name: string,
        }
    },
    links: ILink[]
    menuButtons: IMenuButton[]
}

export const mainData: IMainData = {
    workingTime: {
        title: 'Час роботи',
        time: {
            from: '10:00',
            to: '20:00'
        }
    },
    contacts: {
        tel: '+38-097-000-00-00' 
    },
    callback: {
        title: 'Замовити дзвінок'
    },
    totalPrice: {
        title: 'Товарів на суму'
    },
    buttons: {
        catalog: {
            title: 'Каталог товарів',
            name: 'catalog',
        }
    },
    links: [
        {
            title: 'Про компанію',
            link: ROUTES.ABOUT
        },
        {
            title: 'Акції',
            link: ROUTES.SALES
        },
        {
            title: 'Хіти сезону',
            link: ROUTES.HITS
        },
        {
            title: 'Новинки',
            link: ROUTES.NEW
        },
    ],
    menuButtons: [
        {
            title: 'Улюблені',
            icon: 'heart',
            link: ROUTES.FAVORITES
        },
        {
            title: 'Порівняти',
            icon: 'chart',
            link: ROUTES.COMPARE
        },
        {
            title: 'Особистий кабінет',
            icon: 'user',
            link: ROUTES.OFFICE
        },
        {
            title: 'Кошик',
            icon: 'basket',
            link: ROUTES.BASKET
        },
    ],
} 

