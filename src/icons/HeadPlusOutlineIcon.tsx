import React, { FC, memo } from 'react';
import HeadPlusOutlineSvg from '../svg/head-plus-outline.svg';

export interface IHeadPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadPlusOutlineIcon: FC<IHeadPlusOutlineIconProps> = memo(props => {
  return <HeadPlusOutlineSvg {...props} />;
});
