import React, { FC, memo } from 'react';
import MicrosoftVisualStudioSvg from '../svg/microsoft-visual-studio.svg';

export interface IMicrosoftVisualStudioIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftVisualStudioIcon: FC<IMicrosoftVisualStudioIconProps> = memo(props => {
  return <MicrosoftVisualStudioSvg {...props} />;
});
