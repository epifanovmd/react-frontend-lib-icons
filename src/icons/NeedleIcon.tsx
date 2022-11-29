import React, { FC, memo } from 'react';
import NeedleSvg from '../svg/needle.svg';

export interface INeedleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NeedleIcon: FC<INeedleIconProps> = memo(props => {
  return <NeedleSvg {...props} />;
});
