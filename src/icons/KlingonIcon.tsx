import React, { FC, memo } from 'react';
import KlingonSvg from '../svg/klingon.svg';

export interface IKlingonIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KlingonIcon: FC<IKlingonIconProps> = memo(props => {
  return <KlingonSvg {...props} />;
});
