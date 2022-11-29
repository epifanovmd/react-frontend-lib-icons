import React, { FC, memo } from 'react';
import ChemicalWeaponSvg from '../svg/chemical-weapon.svg';

export interface IChemicalWeaponIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChemicalWeaponIcon: FC<IChemicalWeaponIconProps> = memo(props => {
  return <ChemicalWeaponSvg {...props} />;
});
