import React, { FC, memo } from 'react';
import MicrosoftVisualStudioCodeSvg from '../svg/microsoft-visual-studio-code.svg';

export interface IMicrosoftVisualStudioCodeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftVisualStudioCodeIcon: FC<IMicrosoftVisualStudioCodeIconProps> = memo(props => {
  return <MicrosoftVisualStudioCodeSvg {...props} />;
});
