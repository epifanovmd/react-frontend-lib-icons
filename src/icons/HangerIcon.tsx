import React, { FC, memo } from 'react';
import HangerSvg from '../svg/hanger.svg';

export interface IHangerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HangerIcon: FC<IHangerIconProps> = memo(props => {
  return <HangerSvg {...props} />;
});
