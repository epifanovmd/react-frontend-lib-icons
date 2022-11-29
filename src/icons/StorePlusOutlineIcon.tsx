import React, { FC, memo } from 'react';
import StorePlusOutlineSvg from '../svg/store-plus-outline.svg';

export interface IStorePlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StorePlusOutlineIcon: FC<IStorePlusOutlineIconProps> = memo(props => {
  return <StorePlusOutlineSvg {...props} />;
});
