import React, { FC, memo } from 'react';
import MirrorSvg from '../svg/mirror.svg';

export interface IMirrorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MirrorIcon: FC<IMirrorIconProps> = memo(props => {
  return <MirrorSvg {...props} />;
});
