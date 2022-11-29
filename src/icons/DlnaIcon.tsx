import React, { FC, memo } from 'react';
import DlnaSvg from '../svg/dlna.svg';

export interface IDlnaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DlnaIcon: FC<IDlnaIconProps> = memo(props => {
  return <DlnaSvg {...props} />;
});
