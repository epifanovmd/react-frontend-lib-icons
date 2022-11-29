import React, { FC, memo } from 'react';
import HeadCogOutlineSvg from '../svg/head-cog-outline.svg';

export interface IHeadCogOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadCogOutlineIcon: FC<IHeadCogOutlineIconProps> = memo(props => {
  return <HeadCogOutlineSvg {...props} />;
});
