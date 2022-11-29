import React, { FC, memo } from 'react';
import BorderOutsideSvg from '../svg/border-outside.svg';

export interface IBorderOutsideIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BorderOutsideIcon: FC<IBorderOutsideIconProps> = memo(props => {
  return <BorderOutsideSvg {...props} />;
});
