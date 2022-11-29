import React, { FC, memo } from 'react';
import SeesawSvg from '../svg/seesaw.svg';

export interface ISeesawIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SeesawIcon: FC<ISeesawIconProps> = memo(props => {
  return <SeesawSvg {...props} />;
});
