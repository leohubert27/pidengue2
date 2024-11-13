type pageIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

interface NavbarProps {
    active: pageIndex
}

export default function navbar({ active }: NavbarProps) {
    return (
        <>
            <div className="flex justify-around">
                <div className="O que é?"></div>
            </div>
        </>
    )
}