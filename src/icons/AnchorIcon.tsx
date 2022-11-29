import React, { FC, memo } from 'react';
import AnchorSvg from '../svg/anchor.svg';

export interface IAnchorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AnchorIcon: FC<IAnchorIconProps> = memo(props => {
  return <AnchorSvg {...props} />;
});
