import React, { FC, memo } from 'react';
import MoleculeCoSvg from '../svg/molecule-co.svg';

export interface IMoleculeCoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MoleculeCoIcon: FC<IMoleculeCoIconProps> = memo(props => {
  return <MoleculeCoSvg {...props} />;
});
