import React, { FC, memo } from 'react';
import MuffinSvg from '../svg/muffin.svg';

export interface IMuffinIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MuffinIcon: FC<IMuffinIconProps> = memo(props => {
  return <MuffinSvg {...props} />;
});
