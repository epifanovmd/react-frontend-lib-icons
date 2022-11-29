import React, { FC, memo } from 'react';
import FaceAgentSvg from '../svg/face-agent.svg';

export interface IFaceAgentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FaceAgentIcon: FC<IFaceAgentIconProps> = memo(props => {
  return <FaceAgentSvg {...props} />;
});
