import React, { FC, memo } from 'react';
import StoreCogOutlineSvg from '../svg/store-cog-outline.svg';

export interface IStoreCogOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StoreCogOutlineIcon: FC<IStoreCogOutlineIconProps> = memo(props => {
  return <StoreCogOutlineSvg {...props} />;
});
