import React from 'react';
import PropTypes from "prop-types"

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

const Collapsible = ({items}) => {
    return (
        <div className="collapsable">
           <Accordion allowZeroExpanded={true}>
               {
                 items.map((item, index)=> (
                    <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {item.button}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            {item.info}
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                 ))
               }
        </Accordion> 
        </div>
    );
};

Collapsible.propTypes = {
    items: PropTypes.array,  
};

export default Collapsible;