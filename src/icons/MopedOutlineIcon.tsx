import React, { FC, memo } from 'react';
import MopedOutlineSvg from '../svg/moped-outline.svg';

export interface IMopedOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MopedOutlineIcon: FC<IMopedOutlineIconProps> = memo(props => {
  return <MopedOutlineSvg {...props} />;
});
