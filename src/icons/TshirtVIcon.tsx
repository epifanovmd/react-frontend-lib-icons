import React, { FC, memo } from 'react';
import TshirtVSvg from '../svg/tshirt-v.svg';

export interface ITshirtVIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TshirtVIcon: FC<ITshirtVIconProps> = memo(props => {
  return <TshirtVSvg {...props} />;
});
