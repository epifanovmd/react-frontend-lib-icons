import React, { FC, memo } from 'react';
import HeadCogSvg from '../svg/head-cog.svg';

export interface IHeadCogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadCogIcon: FC<IHeadCogIconProps> = memo(props => {
  return <HeadCogSvg {...props} />;
});
