export type PopupProps = {
    children?: React.ReactNode;
    id?: string;
}

export type PopupTriggerProps = {
    children?: React.ReactNode;
    id?: string;
    bypassButton?: boolean;
    display?: boolean;
}

export type PopupRemoteTriggerProps = {
    children?: React.ReactNode;
    id?: string;
    className?: string;
    triggerId?: string;
    bypassButton?: boolean;
}

export type PopupContentProps = {
    children?: React.ReactNode;
    className?: string;
}

export type PopupHeaderProps = {
    children?: React.ReactNode;
    className?: string;
}

export type PopedContextType = {
    poped: boolean;
    setPoped: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}