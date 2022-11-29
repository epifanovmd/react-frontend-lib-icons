import React, { FC, memo } from 'react';
import HomePlusOutlineSvg from '../svg/home-plus-outline.svg';

export interface IHomePlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomePlusOutlineIcon: FC<IHomePlusOutlineIconProps> = memo(props => {
  return <HomePlusOutlineSvg {...props} />;
});
