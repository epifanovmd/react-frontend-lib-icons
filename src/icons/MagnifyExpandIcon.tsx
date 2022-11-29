import React, { FC, memo } from 'react';
import MagnifyExpandSvg from '../svg/magnify-expand.svg';

export interface IMagnifyExpandIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MagnifyExpandIcon: FC<IMagnifyExpandIconProps> = memo(props => {
  return <MagnifyExpandSvg {...props} />;
});
