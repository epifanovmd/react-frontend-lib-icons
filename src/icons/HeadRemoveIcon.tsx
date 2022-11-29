import React, { FC, memo } from 'react';
import HeadRemoveSvg from '../svg/head-remove.svg';

export interface IHeadRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadRemoveIcon: FC<IHeadRemoveIconProps> = memo(props => {
  return <HeadRemoveSvg {...props} />;
});
