import React, { useState } from 'react';
import { Plus, Trash2, Calculator, Send, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';
import Breadcrumbs from '../components/Breadcrumbs';
import { productCategories, woodGrades, businessInfo } from '../data/mock';
import { toast } from 'sonner';

const Cotizar = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    ciudad: '',
    estado: '',
    comentarios: ''
  });

  const [items, setItems] = useState([
    {
      id: 1,
      categoria: '',
      clase: '',
      estado: '',
      grosor: '',
      ancho: '',
      largo: '',
      cantidad: '',
      piesTablaPorPieza: 0,
      piesTablaTotal: 0
    }
  ]);

  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleItemChange = (id, field, value) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        
        // Calculate board feet when dimensions change
        if (['grosor', 'ancho', 'largo', 'cantidad'].includes(field)) {
          const grosor = parseFloat(updatedItem.grosor) || 0;
          const ancho = parseFloat(updatedItem.ancho) || 0;
          const largo = parseFloat(updatedItem.largo) || 0;
          const cantidad = parseInt(updatedItem.cantidad) || 0;
          
          // Formula: (grosor × ancho × largo) ÷ 12
          const piesTablaPorPieza = (grosor * ancho * largo) / 12;
          const piesTablaTotal = piesTablaPorPieza * cantidad;
          
          updatedItem.piesTablaPorPieza = piesTablaPorPieza;
          updatedItem.piesTablaTotal = piesTablaTotal;
        }
        
        return updatedItem;
      }
      return item;
    });
    
    setItems(updatedItems);
  };

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      categoria: '',
      clase: '',
      estado: '',
      grosor: '',
      ancho: '',
      largo: '',
      cantidad: '',
      piesTablaPorPieza: 0,
      piesTablaTotal: 0
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id) => {
    if (items.length > 1) {
      setItems(items.filter((item) => item.id !== id));
    } else {
      toast.error('Debe haber al menos un ítem en la cotización');
    }
  };

  const getTotalPiesTabla = () => {
    return items.reduce((sum, item) => sum + (item.piesTablaTotal || 0), 0);
  };

  const handleWhatsAppSubmit = () => {
    // Validate form
    if (!formData.nombre || !formData.telefono) {
      toast.error('Por favor completa al menos tu nombre y teléfono');
      return;
    }

    // Validate at least one item with data
    const hasValidItem = items.some(
      (item) => item.categoria && item.grosor && item.ancho && item.largo && item.cantidad
    );

    if (!hasValidItem) {
      toast.error('Por favor agrega al menos un producto con dimensiones completas');
      return;
    }

    // Build WhatsApp message
    let message = `*SOLICITUD DE COTIZACIÓN*\n\n`;
    message += `*Información de contacto:*\n`;
    message += `Nombre: ${formData.nombre}\n`;
    if (formData.empresa) message += `Empresa: ${formData.empresa}\n`;
    if (formData.email) message += `Email: ${formData.email}\n`;
    message += `Teléfono: ${formData.telefono}\n`;
    if (formData.ciudad) message += `Ciudad: ${formData.ciudad}\n`;
    if (formData.estado) message += `Estado: ${formData.estado}\n`;
    message += `\n*Productos solicitados:*\n\n`;

    items.forEach((item, index) => {
      if (item.categoria && item.grosor && item.ancho && item.largo && item.cantidad) {
        const categoria = productCategories.find((c) => c.id === item.categoria);
        message += `${index + 1}. ${categoria?.name || item.categoria}\n`;
        message += `   • Dimensiones: ${item.grosor}" × ${item.ancho}" × ${item.largo}'\n`;
        if (item.clase) message += `   • Clase: ${item.clase}\n`;
        if (item.estado) message += `   • Estado: ${item.estado}\n`;
        message += `   • Cantidad: ${item.cantidad} piezas\n`;
        message += `   • Pies-tabla por pieza: ${item.piesTablaPorPieza.toFixed(2)}\n`;
        message += `   • Total pies-tabla: ${item.piesTablaTotal.toFixed(2)}\n\n`;
      }
    });

    message += `*TOTAL GENERAL: ${getTotalPiesTabla().toFixed(2)} pies-tabla*\n\n`;

    if (formData.comentarios) {
      message += `*Comentarios adicionales:*\n${formData.comentarios}\n`;
    }

    const encodedMessage = encodeURIComponent(message);
    window.open(`${businessInfo.whatsapp}?text=${encodedMessage}`, '_blank');
    
    toast.success('¡Redirigiendo a WhatsApp!');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <Breadcrumbs items={[{ label: 'Cotizar' }]} />

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
            Solicitar cotización
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Completa el formulario con las dimensiones de tu pedido. Nuestra calculadora calculará automáticamente los pies-tabla.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Information */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#333333] mb-6">Información de contacto</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="nombre">Nombre completo *</Label>
                    <Input
                      id="nombre"
                      value={formData.nombre}
                      onChange={(e) => handleFormChange('nombre', e.target.value)}
                      placeholder="Juan Pérez"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="empresa">Empresa (opcional)</Label>
                    <Input
                      id="empresa"
                      value={formData.empresa}
                      onChange={(e) => handleFormChange('empresa', e.target.value)}
                      placeholder="Mi Empresa SA"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Correo electrónico (opcional)</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleFormChange('email', e.target.value)}
                      placeholder="correo@ejemplo.com"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="telefono">Teléfono / WhatsApp *</Label>
                    <Input
                      id="telefono"
                      value={formData.telefono}
                      onChange={(e) => handleFormChange('telefono', e.target.value)}
                      placeholder="871 123 4567"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="ciudad">Ciudad</Label>
                    <Input
                      id="ciudad"
                      value={formData.ciudad}
                      onChange={(e) => handleFormChange('ciudad', e.target.value)}
                      placeholder="Torreón"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="estado">Estado</Label>
                    <Input
                      id="estado"
                      value={formData.estado}
                      onChange={(e) => handleFormChange('estado', e.target.value)}
                      placeholder="Coahuila"
                      className="mt-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product Items */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#333333]">Productos</h2>
                <Button
                  onClick={addItem}
                  variant="outline"
                  size="sm"
                  className="border-[#2A5C2A] text-[#2A5C2A] hover:bg-[#2A5C2A] hover:text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Agregar producto
                </Button>
              </div>

              {items.map((item, index) => (
                <Card key={item.id} className="shadow-lg border-2 border-gray-100">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-[#333333]">
                        Producto {index + 1}
                      </h3>
                      {items.length > 1 && (
                        <Button
                          onClick={() => removeItem(item.id)}
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Eliminar
                        </Button>
                      )}
                    </div>

                    <div className="space-y-6">
                      {/* Category and Class */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label>Categoría del producto</Label>
                          <Select
                            value={item.categoria}
                            onValueChange={(value) => handleItemChange(item.id, 'categoria', value)}
                          >
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Seleccionar categoría" />
                            </SelectTrigger>
                            <SelectContent>
                              {productCategories.map((cat) => (
                                <SelectItem key={cat.id} value={cat.id}>
                                  {cat.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>Clase / Grado</Label>
                          <Select
                            value={item.clase}
                            onValueChange={(value) => handleItemChange(item.id, 'clase', value)}
                          >
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Seleccionar clase" />
                            </SelectTrigger>
                            <SelectContent>
                              {woodGrades.map((grade) => (
                                <SelectItem key={grade.grade} value={grade.grade}>
                                  {grade.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Condition */}
                      <div>
                        <Label>Estado de la madera</Label>
                        <Select
                          value={item.estado}
                          onValueChange={(value) => handleItemChange(item.id, 'estado', value)}
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Seleccionar estado" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Verde">Verde</SelectItem>
                            <SelectItem value="Seca al aire">Seca al aire</SelectItem>
                            <SelectItem value="Estufada">Estufada</SelectItem>
                            <SelectItem value="Enfajillada">Enfajillada</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Dimensions */}
                      <div>
                        <Label className="block mb-2">Dimensiones</Label>
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <Input
                              type="number"
                              step="0.125"
                              min="0"
                              value={item.grosor}
                              onChange={(e) => handleItemChange(item.id, 'grosor', e.target.value)}
                              placeholder='Grosor (pulg.)'
                            />
                            <p className="text-xs text-gray-500 mt-1">Grosor en "</p>
                          </div>
                          <div>
                            <Input
                              type="number"
                              step="0.5"
                              min="0"
                              value={item.ancho}
                              onChange={(e) => handleItemChange(item.id, 'ancho', e.target.value)}
                              placeholder='Ancho (pulg.)'
                            />
                            <p className="text-xs text-gray-500 mt-1">Ancho en "</p>
                          </div>
                          <div>
                            <Input
                              type="number"
                              step="0.5"
                              min="0"
                              value={item.largo}
                              onChange={(e) => handleItemChange(item.id, 'largo', e.target.value)}
                              placeholder="Largo (pies)"
                            />
                            <p className="text-xs text-gray-500 mt-1">Largo en pies</p>
                          </div>
                        </div>
                      </div>

                      {/* Quantity */}
                      <div>
                        <Label htmlFor={`cantidad-${item.id}`}>Cantidad de piezas</Label>
                        <Input
                          id={`cantidad-${item.id}`}
                          type="number"
                          min="1"
                          value={item.cantidad}
                          onChange={(e) => handleItemChange(item.id, 'cantidad', e.target.value)}
                          placeholder="100"
                          className="mt-2"
                        />
                      </div>

                      {/* Calculation Result */}
                      {item.piesTablaTotal > 0 && (
                        <div className="bg-[#f8f9f8] p-4 rounded-lg">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Pies-tabla por pieza:</span>
                            <span className="font-semibold text-[#333333]">
                              {item.piesTablaPorPieza.toFixed(2)} pies-tabla
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-base mt-2 pt-2 border-t border-gray-200">
                            <span className="font-semibold text-gray-700">Total este producto:</span>
                            <span className="font-bold text-[#2A5C2A] text-lg">
                              {item.piesTablaTotal.toFixed(2)} pies-tabla
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Comments */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#333333] mb-6">Comentarios adicionales</h2>
                <Label htmlFor="comentarios">
                  Especificaciones adicionales, fechas de entrega deseadas, o cualquier información relevante
                </Label>
                <Textarea
                  id="comentarios"
                  value={formData.comentarios}
                  onChange={(e) => handleFormChange('comentarios', e.target.value)}
                  placeholder="Ej: Necesito entrega antes del 15 de marzo..."
                  className="mt-2 min-h-32"
                />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Summary */}
          <div className="space-y-6">
            <Card className="shadow-lg sticky top-24 border-2 border-[#2A5C2A]">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-[#2A5C2A] rounded-full flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#333333]">Resumen</h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Productos:</span>
                    <span className="font-semibold text-[#333333]">{items.length}</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold text-gray-700">Total pies-tabla:</span>
                    </div>
                    <div className="text-3xl font-bold text-[#2A5C2A] text-right">
                      {getTotalPiesTabla().toFixed(2)}
                    </div>
                  </div>
                </div>

                <div className="bg-[#f8f9f8] p-4 rounded-lg mb-6">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    <span className="font-semibold text-[#333333]">Nota:</span> Este cálculo es una estimación. 
                    La cotización final puede variar según disponibilidad, especificaciones y cantidades.
                  </p>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={handleWhatsAppSubmit}
                    size="lg"
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Enviar por WhatsApp
                  </Button>
                  <p className="text-xs text-center text-gray-500">
                    Te responderemos lo antes posible
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Formula Card */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-semibold text-[#333333] mb-4">Fórmula de cálculo</h4>
                <div className="bg-[#f8f9f8] p-4 rounded-lg">
                  <p className="text-center text-sm font-mono text-[#333333] mb-2">
                    (Grosor × Ancho × Largo) ÷ 12
                  </p>
                  <p className="text-xs text-gray-500 text-center">
                    Grosor y ancho en pulgadas, largo en pies
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cotizar;
