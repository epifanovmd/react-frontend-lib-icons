import React, { FC, memo } from 'react';
import MicrosoftEdgeSvg from '../svg/microsoft-edge.svg';

export interface IMicrosoftEdgeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftEdgeIcon: FC<IMicrosoftEdgeIconProps> = memo(props => {
  return <MicrosoftEdgeSvg {...props} />;
});
