import React, { FC, memo } from 'react';
import KhandaSvg from '../svg/khanda.svg';

export interface IKhandaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KhandaIcon: FC<IKhandaIconProps> = memo(props => {
  return <KhandaSvg {...props} />;
});
