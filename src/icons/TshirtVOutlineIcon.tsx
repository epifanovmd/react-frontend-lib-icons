import React, { FC, memo } from 'react';
import TshirtVOutlineSvg from '../svg/tshirt-v-outline.svg';

export interface ITshirtVOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TshirtVOutlineIcon: FC<ITshirtVOutlineIconProps> = memo(props => {
  return <TshirtVOutlineSvg {...props} />;
});
