import React, { FC, memo } from 'react';
import MoleculeSvg from '../svg/molecule.svg';

export interface IMoleculeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MoleculeIcon: FC<IMoleculeIconProps> = memo(props => {
  return <MoleculeSvg {...props} />;
});
