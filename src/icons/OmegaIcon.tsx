import React, { FC, memo } from 'react';
import OmegaSvg from '../svg/omega.svg';

export interface IOmegaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OmegaIcon: FC<IOmegaIconProps> = memo(props => {
  return <OmegaSvg {...props} />;
});
