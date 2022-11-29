import React, { FC, memo } from 'react';
import MagnifyPlusSvg from '../svg/magnify-plus.svg';

export interface IMagnifyPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MagnifyPlusIcon: FC<IMagnifyPlusIconProps> = memo(props => {
  return <MagnifyPlusSvg {...props} />;
});
