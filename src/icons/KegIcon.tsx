import React, { FC, memo } from 'react';
import KegSvg from '../svg/keg.svg';

export interface IKegIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KegIcon: FC<IKegIconProps> = memo(props => {
  return <KegSvg {...props} />;
});
