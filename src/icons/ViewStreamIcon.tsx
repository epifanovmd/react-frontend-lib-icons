import React, { FC, memo } from 'react';
import ViewStreamSvg from '../svg/view-stream.svg';

export interface IViewStreamIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewStreamIcon: FC<IViewStreamIconProps> = memo(props => {
  return <ViewStreamSvg {...props} />;
});
