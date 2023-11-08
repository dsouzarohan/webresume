"use client";

import { ISkill } from '@/app/types/resume';
import React, { createContext, useContext, useState } from 'react'

export interface IProfileContextType {
    skill: ISkill | null;
    updateSelectedSkill: (skill: ISkill) => void;
}

export const ProfileContext = createContext<IProfileContextType | null>(null);

type ProfileContextProps = {
    children: React.ReactNode;
  };

export function useProfileContext() {
    const context = useContext(ProfileContext);
    if(!context) {
        throw new Error("useProfileContext is to be used in a ProfileProvider")
    }
    return context;
}

const ProfileProvider: React.FC<ProfileContextProps> = ({ children }) => {

    const [skill, setSelectedSkill] = useState<ISkill | null>(null);
    const updateSelectedSkill = (skill: ISkill) => {
        setSelectedSkill(skill);
    };

    return (
        <ProfileContext.Provider value={{ skill, updateSelectedSkill }}>
            {children}
        </ProfileContext.Provider>
    )
}

export default ProfileProvider