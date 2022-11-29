import React, { FC, memo } from 'react';
import HandOkaySvg from '../svg/hand-okay.svg';

export interface IHandOkayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandOkayIcon: FC<IHandOkayIconProps> = memo(props => {
  return <HandOkaySvg {...props} />;
});
