export type DropdownProps = {
    children: React.ReactNode;
    className?: string;
}

export type DropdownTriggerProps = {
    children: React.ReactNode;
    className?: string;
    bypassButton?: boolean;
}

export type DropdownItemsProps = {
    children: React.ReactNode;
    className?: string;
    anchor?: string;
}

export type DropdownItemProps = {
    children: React.ReactNode;
    className?: string;
}

export type DropdownDividerProps = {
    className?: string;
}

export type DropdownItemIconProps = {
    icon: string;
}

export type ExpandedContextType = {
    expanded: boolean;
    setExpanded: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}