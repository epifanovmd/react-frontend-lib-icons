import React, { FC, memo } from 'react';
import AtomSvg from '../svg/atom.svg';

export interface IAtomIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AtomIcon: FC<IAtomIconProps> = memo(props => {
  return <AtomSvg {...props} />;
});
